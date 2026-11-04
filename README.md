# মাছবন্ধু (Machbondhu) — demo app

A Bangla-first fish farm management demo for small and medium pond farmers in Bangladesh.
No sign-in. All data stays on the phone. Includes full sample data and a "Test every feature" checklist (আমি → সব ফিচার পরীক্ষা).

## Get the APK — option A: GitHub (no software needed)
1. Create a GitHub repo and upload everything in this folder (keep the `.github` folder).
2. GitHub builds the app automatically (Actions tab, ~6 minutes).
3. Open the repo's **Releases** page on your phone, download `machbondhu-demo.apk`, open it, and allow "Install unknown apps".

## Get the APK — option B: your own PC
Needs Node.js 20 and Android Studio (with Android SDK, Java 17).
```
npm install
node scripts/wrap.js
npx cap add android
npx cap sync android
cd android && ./gradlew assembleDebug
```
APK: `android/app/build/outputs/apk/debug/app-debug.apk`

## Edit the app
All app code is in `src/index.html`. After changing it, run `node scripts/wrap.js && npx cap sync android` and rebuild.

## Notes
- This is a debug build for testing; a Play Store release needs a signing key.
- Feeding reminders show while the app is open. Real background alarms need the `@capacitor/local-notifications` plugin (next step).
- Feed, lime and water thresholds are sample values and must be reviewed by an aquaculture expert.
# app-test_aqua
# app-test_aqua
# app-test_aqua
