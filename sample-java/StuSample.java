class StuSample {
  public static void main(String[] args) {
    Student stu1 = new Student();

    stu1.name = "かん";
    stu1.setScore(80, 90);

    stu1.display();
    System.out.println("平均点" + stu1.getAvg() + "点");
  }
}
