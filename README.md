## :dart: Requirements achieved

- [x] I have extended last week's project (as I had already implemented login with Clerk) - but now storing a user's info in my db and referring to that info not Clerk's details. I had to rename my tables as I'm using the same Supabase db project - so **posts** became **chats** and **comments** became **replies**
- [x] General **error.tsx file** has been a useful error page when Nextjs isn't showing an error. Added **NotFound** files to general, user and chats routes
- [x] Used chadcn components (personal preference over Radix)
- [x] From shadcn: [Hover Card](https://ui.shadcn.com/docs/components/hover-card) [Accordian](https://ui.shadcn.com/docs/components/accordion) [Select](https://ui.shadcn.com/docs/components/select) [Button](https://ui.shadcn.com/docs/components/button)
- [x] Form for user to enter user details at **/users/signup**. Reused form to edit user details at **suers/profile**
- [x] Users can post 'chats' using their db ID, and also reply to others' chats

- So much pain on using a utility to fetch the clerk_id and match it with my own db users table... there were circular calls starting a clerk request before user had signed in! Especially using it in the NavBar when the user isn't signed in or hasn't created user info yet!

- I had huge problems in securing routes this week - I added protected routes in the proxy utility. Claude being no help at all :( I went down the rabbit hole of webhooks and using **ngrok** which got me to register and add my port 3000 and a yet another env key but still didn't secure the routes. In the end, **Connor** helped me add 'async' and 'await' to my proxy.ts file. Bam. Just like that, it worked. Sometimes the smallest things can take a day to fix.

## :dart: Stretch goals

- [x] Using Typescript, baby!
- [x] Users can edit only their own 'chats'
- [x] Username and bio are requried (client-side validation)
- [x] View all users, click on user to see invidual user page and chats.length to display how many chats that have started
- [x] Hover over user avatar and see when the joined
- [x] Motion enter animation

## :dart: Goals not acheived yet

- [ ]

## With thanks to

- [Avatar images by DiceBear](https://www.dicebear.com/playground/?style=open-peeps)
- [Tea in cup cartoon vector, catalyststuff](https://www.freepik.com/free-vector/tea-cup-floating-cartoon-vector-icon-illustration-drink-object-icon-isolated-flat-vector_377452216.htm#fromView=search&page=1&position=15&uuid=7f38ec93-4945-4ce2-9a09-94bf2d035114&query=mug)
- [Messages background, juicy_fish](https://www.freepik.com/free-vector/messages-light-colour-background_50527714.htm#fromView=search&page=1&position=0&uuid=cca4cf5e-462c-4219-8106-a408a367bd3b&query=background+speech)
