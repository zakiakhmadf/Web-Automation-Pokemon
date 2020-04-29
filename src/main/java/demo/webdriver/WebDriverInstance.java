package demo.webdriver;

import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.BrowserType;
import org.openqa.selenium.remote.CapabilityType;

import java.util.concurrent.TimeUnit;

public class WebDriverInstance {

    public static WebDriver driver;

    public static void initialize() {
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--start-maximized", "--disable-infobars");

        // Set Capability
        options.setCapability(CapabilityType.PLATFORM_NAME, Platform.MAC);
        options.setCapability(CapabilityType.BROWSER_NAME, BrowserType.CHROME);

        // Initialize driver
        driver = new ChromeDriver(options);

        // Maximize Chrome window on Mac
        //driver.manage().window().maximize();

        // Implicit Wait
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }

    public static void quit() {
        // Close/quit page/driver
        driver.quit();
    }
}
