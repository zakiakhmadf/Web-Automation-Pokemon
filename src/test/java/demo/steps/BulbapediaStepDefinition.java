package demo.steps;

import demo.pages.ArticlePage;
import demo.pages.HomePage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class BulbapediaStepDefinition {

    private HomePage homePage = new HomePage();
    private ArticlePage articlePage = new ArticlePage();

    @Given("User open bulbapedia home page")
    public void userOpenBulbapediaHomePage() {
        homePage.openHomePage();
    }

    @When("User input pokemon {string} on the search field")
    public void userInputPokemonOnTheSearchField(String keyword) {
        homePage.inputAndSearchPokemon(keyword);
    }

    @Then("User see pokemon named {string} on bulbapedia article page")
    public void userSeePokemonNamedWithNumberOnBulbapediaArticlePage(String name) {
        String actual = articlePage.getPokemonName();

        Assert.assertEquals(name, actual);
    }

    @Then("User see pokemon number {string} on bulbapedia article")
    public void userSeePokemonNumberOnBulbapediaArticle(String number) {
        String actual = articlePage.getPokemonNumber();

        Assert.assertEquals(number, actual);
    }
}
