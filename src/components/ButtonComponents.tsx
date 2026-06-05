import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks"; // Assuming you have useAppSelector set up
import { increment, decrement, reset } from "@/store/counterSlice"; // Adjust path to your slice

export default function ButtonComponents() {
  const dispatch = useAppDispatch();
  
  // 1. Grab the current count from the Redux store
  // (Adjust state.counter.value depending on how you named it in your store config)
  const count = useAppSelector((state) => state.count.value); 

  return (
    <div className="p-4 space-y-4">
      {/* 2. Display the dynamic count */}
      <h1 className="text-xl font-bold">Count: {count}</h1>

      <div className="flex gap-2">
        {/* 3. Dispatch actions with payloads or just trigger them */}
        <Button onClick={() => dispatch(increment(5))}>Increase by 5</Button>
        <Button onClick={() => dispatch(decrement())}>Decrease</Button>
        <Button onClick={() => dispatch(reset())} variant="outline">Reset</Button>
      </div>
    </div>
  );
}