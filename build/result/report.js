$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/SearchPokemon.feature");
formatter.feature({
  "name": "Search Bulbapedia",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Web"
    }
  ]
});
formatter.scenario({
  "name": "Search pokemon Pikachu on Bulbapedia",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Web"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open bulbapedia home page",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepDefinition.userOpenBulbapediaHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input pokemon \"Pikachu\" on the search field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepDefinition.userInputPokemonOnTheSearchField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see pokemon named \"Pikachu\" on bulbapedia article page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepDefinition.userSeePokemonNamedWithNumberOnBulbapediaArticlePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see pokemon number \"#025\" on bulbapedia article",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepDefinition.userSeePokemonNumberOnBulbapediaArticle(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search pokemon Pikachu on Bulbapedia",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Web"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open bulbapedia home page",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepDefinition.userOpenBulbapediaHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input pokemon \"Charizard\" on the search field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepDefinition.userInputPokemonOnTheSearchField(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d81.0.4044.129)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Zakis-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:149a:c6f8:f842:c174%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: /var/folders/qq/ndm4q76j4p3...}, goog:chromeOptions: {debuggerAddress: localhost:60781}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d23d9a0398706b8c8b1c93afc3a0af9c\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\n\tat demo.pages.HomePage.inputAndSearchPokemon(HomePage.java:21)\n\tat demo.steps.BulbapediaStepDefinition.userInputPokemonOnTheSearchField(BulbapediaStepDefinition.java:23)\n\tat ✽.User input pokemon \"Charizard\" on the search field(file:///Users/zakiakhmadf/Desktop/Web_ZakiAkhmadFaridzan/src/test/resources/features/SearchPokemon.feature:12)\n",
  "status": "failed"
});
formatter.step({
  "name": "User see pokemon named \"Charizard\" on bulbapedia article page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepDefinition.userSeePokemonNamedWithNumberOnBulbapediaArticlePage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see pokemon number \"#006\" on bulbapedia article",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepDefinition.userSeePokemonNumberOnBulbapediaArticle(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search pokemon Pikachu on Bulbapedia",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Web"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open bulbapedia home page",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepDefinition.userOpenBulbapediaHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input pokemon \"Charmander\" on the search field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepDefinition.userInputPokemonOnTheSearchField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see pokemon named \"Charmander\" on bulbapedia article page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepDefinition.userSeePokemonNamedWithNumberOnBulbapediaArticlePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see pokemon number \"#004\" on bulbapedia article",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepDefinition.userSeePokemonNumberOnBulbapediaArticle(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});