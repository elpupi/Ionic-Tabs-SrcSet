# Ionic-Tabs-SrcSet

I have a "Tabs" with 2 "Tab". On Tab1 I have an img with [srcset]="img_url" (load)="load_func()". When I go on Tab2 and resize the window, "onload" is triggered and the load handler called. Why is there this wrong behavior? (It's coming from the binding of {srcset] creating this wrong action after few tests. How can I fix it?

TEST CASE:

Go to any tab outside Home like Contact or About. Resize the window.

result:

console.log displays a message and also a window.alert pops.
This are called in the onload handler in home.ts
