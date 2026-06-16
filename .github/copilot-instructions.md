# AI Coding Guidelines for myapplogin

## Architecture Overview
- **Expo Router App**: File-based routing in `src/app/`. Screens: `index.tsx` (login), `signup.tsx`, `produtos.tsx` (products CRUD).
- **Layout**: `_layout.tsx` uses Stack navigation with `headerShown: false`.
- **Firebase Integration**: Auth via `firebase/auth`, Firestore for data in `src/lib/firebase.ts`.
- **Components**: Reusable UI in `src/components/` (Button, Input).
- **Assets**: Images in `src/assets/`, imported with `require()`.

## Navigation & Routing
- Use `expo-router` with typed routes enabled.
- Navigate with `useRouter()`: `router.replace("./produtos")` for auth-protected routes.
- Auth flow: Login success → `/produtos`; Signup success → `/`.

## Firebase Usage
- Config via env vars prefixed `EXPO_PUBLIC_FIREBASE_*`.
- Auth: `signInWithEmailAndPassword`, `createUserWithEmailAndPassword`.
- Firestore: `addDoc`, `getDocs` on collections like "produtos".
- Error handling: `Alert.alert("Erro", error.message)`.

## Component Patterns
- **Button**: Custom TouchableOpacity with `label`, `disabled` state, blue theme (#3366FF).
- **Input**: TextInput wrapper with border, padding, no custom props.
- Styles: Inline `StyleSheet.create` with consistent spacing (padding: 32, gap: 12).

## Development Workflow
- **Start**: `npm start` (Expo dev server).
- **Platform**: `npm run android/ios/web` for specific platforms.
- **Path Aliases**: `@/*` maps to `./src/*` in `tsconfig.json`.
- **UI Language**: Portuguese text (e.g., "Entrar", "Cadastrar").
- **Keyboard Handling**: `KeyboardAvoidingView` with platform-specific behavior.

## Code Style
- Strict TypeScript (`tsconfig.json` extends `expo/tsconfig.base`).
- Async functions for Firebase ops, try/catch with alerts.
- State management: `useState` for forms, no global state.
- No tests or linting configured; focus on manual validation.