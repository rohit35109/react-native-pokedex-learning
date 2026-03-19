import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { TabThemeProvider } from "../shared/context/tab-theme-context";

export default function RootLayout() {
  return (
    <>
    <TabThemeProvider>
      <StatusBar hidden/>
        <Stack>
          <Stack.Screen name="(tabs)" options={{
            headerShown: false,
          }} />
          {/* <Stack.Screen name="index" options={{ title: "Home" }} /> */}
          <Stack.Screen
            name="details"
            options={{
              title: "Details",
              headerBackButtonDisplayMode: "minimal",
              presentation: "formSheet",
              sheetAllowedDetents: [0.8, 0.9, 1],
              sheetGrabberVisible: true,
            }}
          />
        </Stack>
    </TabThemeProvider>
    </>
  );
}
