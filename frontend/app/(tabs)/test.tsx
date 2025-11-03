import { Link, router } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function Test() {
  return (
    <View className="flex-1 items-center justify-center gap-4 bg-slate-100 px-6 py-10">
      <Text className="text-2xl font-semibold text-slate-800">
        Hello NativeWind!
      </Text>
      <Text className="text-base text-slate-600">
        Tailwind classes now work across your React Native components.
      </Text>
      <View className="items-center gap-2 rounded-xl bg-white p-4 shadow-sm">
        <Text className="text-sm text-slate-500">Try editing this screen:</Text>
        <Text className="text-base font-medium text-slate-700">
          app/(tabs)/test.tsx
        </Text>
      </View>
      <Button title="設定へ" onPress={() => router.push("/setting")} />
      <Link href="/">
        <Text className="text-red-600 underline">戻る</Text>
      </Link>
    </View>
  );
}
