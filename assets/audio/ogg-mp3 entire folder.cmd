for %%a in (*.ogg) do (
  echo processing %%a
  ffmpeg -i %%a %%~na.mp3
)
