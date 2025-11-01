Using Typescript, baby!

So much pain on using a utility to fetch the clerk_id and match it with my own db users table... there were circular calls starting a clerk request before user had signed in! Especially using it in the NavBar when the user isn't signed in or hasn't created user info yet!

I liked the idea of extending last week's project (as I had already implemented login with Clerk) - to store a user's Info in my db. I had to rename my tables as I'm using the same Supabase db project - so **posts** became **chats** and **comments** became **replies**

I had huge problems in securing routes this week - I added protected routes in the proxy utility. Claude being no help at all :( I went down the rabbit hole of webhooks and using **ngrok** which got me to register and add my port 3000 and a yet another env key but still didn't secure the routes. In the end, Connor helped me add 'async' and 'await' to my proxy.ts file. Bam. Just like that, it worked. Sometimes the smallest things can take a day to fix.

Used Hover Card from chadcn https://ui.shadcn.com/docs/components/hover-card
Used Accordian from chadcn https://ui.shadcn.com/docs/components/accordion
Used Select from shadcn https://ui.shadcn.com/docs/components/select
Used Button from shadcn https://ui.shadcn.com/docs/components/button

Avatar images by DiceBear.coom https://www.dicebear.com/playground/?style=open-peeps

Tea in cup floating cartoon vector icon illustration drink object icon isolated flat vector, catalyststuff
https://www.freepik.com/free-vector/tea-cup-floating-cartoon-vector-icon-illustration-drink-object-icon-isolated-flat-vector_377452216.htm#fromView=search&page=1&position=15&uuid=7f38ec93-4945-4ce2-9a09-94bf2d035114&query=mug

Messages light colour background, juicy_fish
https://www.freepik.com/free-vector/messages-light-colour-background_50527714.htm#fromView=search&page=1&position=0&uuid=cca4cf5e-462c-4219-8106-a408a367bd3b&query=background+speech
