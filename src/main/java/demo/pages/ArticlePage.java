package demo.pages;

import demo.webdriver.WebDriverInstance;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ArticlePage {

    public String getPokemonName() {
        WebDriverWait explicitWait = new WebDriverWait(WebDriverInstance.driver, 30);
        WebElement pokemonName = explicitWait
                .until(ExpectedConditions.presenceOfElementLocated(By.xpath("//td[@class='roundy']//table//tbody//tr//td//big//b")));
        return pokemonName.getText();
    }

    public String getPokemonNumber() {
        WebDriverWait explicitWait = new WebDriverWait(WebDriverInstance.driver, 30);
        WebElement pokemonNumber = explicitWait
                .until(ExpectedConditions.presenceOfElementLocated(By.xpath("//table[@class='roundy']//a[@title='List of Pokémon by National Pokédex number']/span")));
        return pokemonNumber.getText();
    }

}
