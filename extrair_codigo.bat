@echo off
setlocal enabledelayedexpansion

REM Caminho até a pasta 'main' onde estão os arquivos .java e .jsp
cd /d "C:\Users\Cliente\nicolegg13\react-studies\react"

set "PASTA=."
set "ARQUIVO_SAIDA=react-codes.txt"

REM Apagar arquivo anterior, se existir
if exist "%ARQUIVO_SAIDA%" del "%ARQUIVO_SAIDA%"

REM Percorrer todos os arquivos .java e .jsp na pasta e subpastas
for /R "%PASTA%" %%F in (*.jsx *.html) do (
    echo - Endereço: %%F:>>"%ARQUIVO_SAIDA%"
    type "%%F" >>"%ARQUIVO_SAIDA%"
    echo.>>"%ARQUIVO_SAIDA%"
    echo.>>"%ARQUIVO_SAIDA%"
)

echo Finalizado. Arquivo gerado: %CD%\%ARQUIVO_SAIDA%
pause
