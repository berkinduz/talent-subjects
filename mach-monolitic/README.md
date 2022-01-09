# Microservice Architecture

- In microservice architecture, multiple loosely coupled services work together. Each service focuses on a single purpose and has a high cohesion of related behaviors and data.

This definition includes three microservice design principles:

    - Single purpose: each service should focus on one single purpose and do it well.
    - Loose coupling: services know little about each other. A change to one service should not require changing the others.Communication between services should happen only through public service interfaces.
    - High cohesion: each service encapsulates all related behaviors and data together. If we need to build a new feature, all the changes should be localized to just one single service.

![micro](https://avinetworks.com/wp-content/uploads/2018/06/Microservices-vs-monolithic-architecture-diagram.png)

# MACH Architecture

### **M**icroservices-based, **A**PI-first, **C**loud-native, **H**eadless

- Microservices: Individual pieces of business functionality that are independently developed, deployed and managed.
- API-first: All functionality is exposed through an API, making it possible to tie together two or more applications or services.
- Cloud-Native SaaS: Software-as-a-Service that leverages the full capabilities of the cloud, beyond storage and hosting, including elastic scaling of highly available resources. Functionality is updated manually, eliminating the need for upgrade management.
- Headless: The front-end user experience is completely decoupled from the back-end logic, allowing for complete design freedom in creating the user interface and for connecting to other channels and devices (i.e. existing applications, IoT, A/R, Vending Machines, sensors, etc.).

![mach](https://www.itransition.com/static/764b9c73f7bad90bee00216d5b63222b/3-the-mach-architecture[1].svg)
