
function Home() {

  return (
    <div class="page1">
      <section class="section-page1">
    <h1 class="h1-page1"><img class="displayed" src="src/img/Data1.png"/></h1>
    <h1 class="h1-page1">Intern Sign Up</h1>

    <form class="class-form">


      <div class="group-name">
        <label id="label-name" for="name">Full Name *</label>
        <input type="text" id="name" class="input-pattern" required placeholder="Name"/>
      </div>


      <div class="line2">

        <div class="group-email">
          <label id="label-email" for="email">Email *</label>
          <input type="email" class="input-pattern" required placeholder="foo@bar.com"/>
        </div>
      
        <div class="group-phone">
          <label id="label-phone" for="fhone">Phone</label>
          <input type="tel" class="input-pattern" placeholder="(83) 00000-0000"/>
        </div>
      
        <div class="group-password">
          <label id="label-password" for="label-password">Password *</label>
          <input type="password" class="input-pattern" required/>
        </div>

        <div class="group-birthday">
          <label id="label-birthday" for="birthday">Birthday *</label>
          <input type="date" class="input-date" required placeholder="yyyy/mm/dd"/>
        </div>
      </div>

      <div class="line4">
        <div class="group-checkbox">
          <input id="input-checkbox" type="checkbox" checked/>
          <label id="label-chekbox" for="input-checkbox"><span id="term-accept">I accept the terms and privacy</span></label>
        </div>

        <div class="group-submit">
          <button id="input-button" type="submit" value="Register">Register</button>
        </div>
      </div>
    </form>
  </section>
  </div>
  )
}

export default Home
