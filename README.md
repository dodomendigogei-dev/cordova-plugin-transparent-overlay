Instrucciones para subir el plugin `cordova-plugin-transparent-overlay`

Contenido de esta carpeta:
- `transparent-overlay-plugin.zip` : ZIP listo para subir
- `README_upload.md` : estas instrucciones

Opciones de subida:

1) Subir como "Custom Plugin" en VoltBuilder (si tu plan lo permite)
   - Abre VoltBuilder → tu proyecto → Plugins → Add custom plugin (o similar).
   - Selecciona `transparent-overlay-plugin.zip` y súbelo.
   - Lanza la build.

2) Publicar en GitHub y usar en `config.xml` (recomendado)
   - Crea un repo en GitHub: `dodomendigogei-dev/cordova-plugin-transparent-overlay`.
   - Subir el contenido del plugin (no el ZIP) al repo.
   - En tu proyecto `config.xml` usa:
     <plugin name="cordova-plugin-transparent-overlay" spec="https://github.com/dodomendigogei-dev/cordova-plugin-transparent-overlay.git" />
   - Sube el ZIP del proyecto a VoltBuilder (o reempaqueta) y lanza la build.

Comandos rápidos para publicar en GitHub (desde la carpeta del plugin local):

```bash
cd plugins/cordova-plugin-transparent-overlay
git init
git add .
git commit -m "Add transparent overlay plugin"
git branch -M main
git remote add origin https://github.com/dodomendigogei-dev/cordova-plugin-transparent-overlay.git
git push -u origin main
```

Notas:
- Si VoltBuilder muestra errores pidiendo el plugin en npm, usa la opción del repo Git o sube el ZIP como custom plugin.
- No descomprimas `transparent-overlay-plugin.zip` si vas a subirlo tal cual; sube el ZIP.
- Si necesitas que vuelva a crear/renombrar el ZIP, dímelo y lo actualizo.

Si quieres, incluyo también una copia del `config.xml` con la URL ya puesta.
