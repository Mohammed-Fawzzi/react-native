import { useState } from "react";
import { ActivityIndicator, Button } from "react-native";

export default function ActivityIndicatorComp() {
  const [isLoading, setIsLoading] = useState(true);


  return (
    <>
      <Button title="Toggle Loading" onPress={() => setIsLoading(!isLoading)} />
      <ActivityIndicator style={{ flex: 1, justifyContent: "center", alignItems: "center" }} size="large" color="#0000ff" animating={isLoading} />
    </>
  )
}
