stu = prompt("درجات الطالب");
switch (true) {
  case stu >= 0 && stu <= 50:
    console.log("ض");
    break;
  case stu >= 50 && stu <= 65:
    console.log("ل");
    break;
  case stu >= 65 && stu <= 75:
    console.log("ج");
    break;
  case stu >= 75 && stu <= 85:
    console.log("ج ج");
    break;
  case stu >= 85 && stu <= 100:
    console.log("م");
    break;
  default:
    console.log("go out");
    break;
}
