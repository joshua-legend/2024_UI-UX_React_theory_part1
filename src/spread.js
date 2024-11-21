const bts = ["뷔", "지민", "RM", "정국", "진", "슈가"];
const hot = ["문희준", "토니안", "강타", "장우혁"];

const [a, b] = bts; // 뷔 지민
const [c, ...rest] = bts; // 뷔 "지민", "RM", "정국", "진", "슈가"
const boy = [...bts, ...hot];
