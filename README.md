# Pulse Rider

Neon arrow obstacle-dodging game on the Blockfall synthwave grid, packaged as an Android app.

Every push to `main` builds the app on GitHub Actions. When the build finishes, open the repo's **Releases** page, download `pulse-rider.apk` from the **latest** release and install it.

All builds are signed with the same debug key (`debug.keystore`), so a new build installs over the old one. That key is for personal builds only, not for the Play Store.

Files are kept flat so they can be uploaded from a phone; the workflow in `.github/workflows/build-apk.yml` arranges them into a Capacitor project before building.
