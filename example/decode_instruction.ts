import { RaydiumAmmCoder } from "../coder";
// import { Idl } from "@coral-xyz/anchor";
// @ts-ignore
import idl from "../idl.json";

(async () => {
  // @ts-ignore
  const coder = new RaydiumAmmCoder(idl);
  const result = coder.instruction.decode(
    Buffer.from("0bf70a9c01000000006417427900000000", "hex")
  );
  console.log(result);
})();
