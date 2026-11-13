$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$resumes = Join-Path $root 'assets/resumes'
$previews = Join-Path $root 'assets/resume-previews'
New-Item -ItemType Directory -Path $previews -Force | Out-Null

foreach ($pdf in Get-ChildItem -LiteralPath $resumes -Filter '*.pdf' -File) {
  $info = & pdfinfo $pdf.FullName
  if ($LASTEXITCODE -ne 0 -or ($info -join "`n") -notmatch '(?m)^Pages:\s+1\s*$') {
    throw "Expected a one-page résumé: $($pdf.Name)"
  }
  # Poppler on Windows can read these paths but may fail to create files under an emoji-named folder.
  $prefix = Join-Path ([IO.Path]::GetTempPath()) ("resume-preview-" + [guid]::NewGuid().ToString('N'))
  try {
    & pdftoppm -f 1 -l 1 -singlefile -scale-to 1600 -jpeg -jpegopt 'quality=88,optimize=y' $pdf.FullName $prefix
    if ($LASTEXITCODE -ne 0 -or -not (Test-Path -LiteralPath "$prefix.jpg")) {
      throw "Could not render $($pdf.Name)"
    }
    [IO.File]::WriteAllBytes((Join-Path $previews ($pdf.BaseName + '.jpg')), [IO.File]::ReadAllBytes("$prefix.jpg"))
  } finally {
    if (Test-Path -LiteralPath "$prefix.jpg") { Remove-Item -LiteralPath "$prefix.jpg" }
  }
}
