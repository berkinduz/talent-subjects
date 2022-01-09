# S.O.L.I.D. Principles

1- Single Responsibility Principle:
![srp](https://miro.medium.com/max/2000/1*P3oONz9Da3Tc1w97fMV73Q.png)
-- Each software module should have one and only one reason to change
-- Each software module should have only one job.
-- If you're using AND/OR in your module, probably you broke this principle

2- Open/Closed Principle
![ocp](https://miro.medium.com/max/2000/1*0MtFBmm6L2WVM04qCJOZPQ.png)
-- Objects or entities should be open for extension but closed for modification.
-- You can extend your class with new features but you cant change fundamental structure.

3- Liskov Substitution Principle
![alt](https://miro.medium.com/max/2000/1*yKk2XKJaCLNlDxQMx1r55Q.png)
-- Child classes should use all instance of inherited class.

4- Interface Segregation Principle
![asd](https://miro.medium.com/max/5200/1*2hmyR9L43Vm64MYxj4Y89w.png)
-- When a Class is required to perform actions that are not useful, it is wasteful and may produce unexpected bugs if the Class does not have the ability to perform those actions

5- Dependency Inversion Pattern
![alt](https://miro.medium.com/max/2000/1*Qk8tDmjQlyvwKxNTfXIo0Q.png)
-- This principle says a Class should not be fused with the tool it uses to execute an action. Rather, it should be fused to the interface that will allow the tool to connect to the Class.
