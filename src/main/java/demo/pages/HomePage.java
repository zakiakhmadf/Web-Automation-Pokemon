package demo.pages;

import demo.webdriver.WebDriverInstance;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePage {

    public void openHomePage() {
        // Get/open page
        WebDriverInstance.driver.get("https://bulbapedia.bulbagarden.net/wiki/Main_Page");
    }

    public void inputAndSearchPokemon(String keyword) {
        // Find element by ID
        WebDriverWait explicitWait = new WebDriverWait(WebDriverInstance.driver, 30);
        explicitWait.until(ExpectedConditions.presenceOfElementLocated(By.id("searchInput"))).isDisplayed();

        WebElement inputSearch = WebDriverInstance.driver.findElement(By.id("searchInput"));
        // Input keyword
        inputSearch.sendKeys(keyword + Keys.ENTER);
    }
}
