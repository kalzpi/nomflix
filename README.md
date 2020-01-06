# Nomflix


## Screens

- [ ] Home
- [ ] TV Shows
- [ ] Search
- [ ] Detail

## Things that I learned.

**1. Switch, Redirect, exact, render inside of Router**

1.1. We can use render inside of Router like below.
~~~
<Router>
    <Route path="/tv/popular" exact render={()=><h1>Popular</h1>}></Route>    
</Router>
~~~

When users go to url /tv/popular, we can directly render ```<h1>Popular</h1>``` in the Route like this.

1.2. exact

In below code, when user go to /tv/popular, he will see the component {TV} and ```<h1>Popular</h1>``` at the same time. Because Router seeks every Route that matchs with urlpattern.
So if we don't want my app acts like that, we need to put 'exact' inside of Route like path="/".
But in the same time, we can intentionally use that concept. If we want some small tab which contains dynamic contents inside, we can use this.

~~~
<Router>
    <Route path="/" exact component={Home}></Route>
    <Route path="/tv" component={TV}></Route>
    <Route path="/tv/popular" render={()=><h1>Popular</h1>}></Route>
</Router>
~~~

1.3. Redirect and Switch
In the code on the above section 2, user will see empty page when they try some weird url on browser. To avoid that, you can use Redirect like below.

~~~
<Router>
    <Route path="/" exact component={Home}></Route>
    <Route path="/tv" component={TV}></Route>
    <Route path="/tv/popular" render={()=><h1>Popular</h1>}></Route>
    <Redirect from="*" to="/" />
</Router>
~~~

But the problem is, user will not see any of other pages because Router matches "*" in any urlpatterns. So basically user can only see "/" every time.
To solve this, we need to put ```<Switch></Switch>``` on the outside of Routes and then Router will route only one path in a time.

~~~
<Router>
    <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/tv" exact component={TV}></Route>
        <Route path="/tv/popular" exact render={()=><h1>Popular</h1>}></Route>
        <Route path="/search" exact component={Search}></Route>
        <Redirect from="*" to="/" />
    </Switch>
</Router>
~~~

In this case, you have to put 'exact' in the /tv Route because Router will show you only one page, /tv because of ```<Switch></Switch>```.

**2. Styled component**  
2.1. Three concepts that applies css in react app.
- Using one styles.css file in src/
- Using modules.css
- Using styled component


