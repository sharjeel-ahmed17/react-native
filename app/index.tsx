import { View } from "react-native";
import Todos from '@/app/todos/index.js'
// import Calculator from '@/app/calculator/index.js'
// import TicTacToe from "@/app/ticTacToe/index.js"
// import QuizApp from "@/app/quiz/index.js"
// import BMICalculator from "@/app/bmi/index.js"

// import WheatherApp from '@/app/wheather/index.js'
export default function Index() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Todos />
      {/* <Calculator /> */}
      {/* <TicTacToe /> */}
      {/* <QuizApp /> */}
      {/* <BMICalculator /> */}
      {/* <WheatherApp /> */}


    </View>
  );
}
