# High Level Diagram for our Project
##

### What we need to make out project 

***Client Side ***

    - _Mobile Frontend_

    - _Web Frontend_

< So, when both of the frontend make the request, a lot of things gonna happen behind the scene >
***
> Let's talk about that :-

The first Layer of defence we actually have is going to our `load balancer`.

### What is load balancer 
##
* Let's, say we have one server running in one machine, and we know one machine is not might enough for handling a very big scale.
* So, we need multiple server to handle multiple concurrent and parallel req.
* Now, we have multiple applicaiton server running behind the scene, and in front of all those server we have `load balancer`.
* When ever client make the req, it actually routed to the load balancer and the load balacer route the req to multiple running application server.
> Load balancer internally using algorithim (e.x ; round robin , FIFO).
> So, the only work for laod balancer is actally handle which server hadles which request.

![docDesign](https://user-images.githubusercontent.com/99763066/209458842-3817b7cb-cf9f-40d1-848d-937e7222a62a.jpg)


`***Note - The thing is this type of archi generally shown that load balancer directly route the req to the app.. server, but in real life there is so many things really happeing, show in below fig:- ***.

![highlevelDesign](https://user-images.githubusercontent.com/99763066/209458855-da8ae201-c78e-433f-998d-280ede8fa85d.jpg)

###
` we know we have to two type of architectue 1. MONOLIGTH, 2. MICROSERVICES`
##
### MICROSERVICES

- In micoservie we have multiple services running , and every services has there own things to do.
##

>***HOW THE LOAD BALANCER IS GOING TO COMMUNITCATE WITH THESE SERVICES ?***.

    -There  is something known as `API GATE WAY OR GATE WAY SERVICE`.

Now, what happen is your req from  the load balancer is routed to the API gateway .
*** WHAT IS THE USE CASE OF THE API GATE WAY ? ***

`GATEWAY is seprate service you maintain`

- In API gateway we going to filter the req . 
- B/W Frontend And the Backend the `GATEWAY act as a middleend`.
*** ` * It collect the req from the frontend , fillter the req , if required does the authentication and some aggregate funtion also.
* One more things Gateway do is that it can directly hit the service Or it hit the orchestraton layer which handle the intervention( Need data from diff layers ) from multiple service ` *** 
##
#### orchestration Layer service ?
- handle the intervention( Need data from diff layers ) from multiple service
##

#### WHAT are process QUeue ?

Lets say ther is a service that is intaiating 30 query per sec other service which just consume only 5 query per sec, the service cannot handle 30 query in one go so we have something in middle which handle this bombbard we ` process queue `. 

