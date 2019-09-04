import { parseFlutterDoctor } from "./index";

describe("#parseFlutterDoctor", () => {
  it ("parses the output correctly", () => {

    const output = `
[✓] Flutter (Channel master, v1.8.4-pre.108, on Mac OS X 10.14.6 18G87, locale pt-BR)

[!] Android toolchain - develop for Android devices (Android SDK version 28.0.3)
    ! Some Android licenses not accepted.  To resolve this, run: flutter doctor --android-licenses
[✓] Xcode - develop for iOS and macOS (Xcode 10.3)
[!] Android Studio (version 3.4)
    ✗ Flutter plugin not installed; this adds Flutter specific functionality.
    ✗ Dart plugin not installed; this adds Dart specific functionality.
[!] IntelliJ IDEA Community Edition (version 2019.1.3)
    ✗ Flutter plugin not installed; this adds Flutter specific functionality.
    ✗ Dart plugin not installed; this adds Dart specific functionality.
[!] VS Code (version 1.35.1)
    ✗ Flutter extension not installed; install from
      https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter
[!] Connected device
    ! No devices available

! Doctor found issues in 5 categories.
`

    expect(parseFlutterDoctor(output)).toEqual({
      version: "Channel master, v1.8.4-pre.108, on Mac OS X 10.14.6 18G87, locale pt-BR",
      android: {
        errors: [],
        warnings: [ "! Some Android licenses not accepted.  To resolve this, run: flutter doctor --android-licenses" ],
      },
      ios: {
        errors: [],
        warnings: [],
      }
    })
  })
})
