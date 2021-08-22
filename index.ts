import { Type } from "./data";
import { boot } from "./handleData";

const types: Type[] = ["username", "email"];
const rows: number = 10;
boot(rows, types);
