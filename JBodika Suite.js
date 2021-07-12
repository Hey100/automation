import org.openqa.Selenium.By;
import org.openqa.Selenuim.WebDriver;
import org.openqa.selenium.WindowType;
import org.openqa.selenium.chrome.ChromeDriver;

Public class automationsuite 
{
 Public static void main(String[] args) 
{
System.setProperty("webdriver.chrome.driver","/Users/pc/Downloads/chromedriver");

WebDriver driver=new ChromeDriver();

driver.get("http://automationpractice.com/");
driver.findElement(By.id("search_query_top")).sendKeys("BLOUSES");

WebDriver newTab=driver.SwitchTo().newWindow(WindowType.TAB);
String childTab=newTab.getWindowHandle();
System.out.printIn("parent tab "+childTab);

newTab.get("http://automationpractice.com/index.php?id_category=5&controller=category");
newTab.findElement (by.class("button lnk_view btn btn-default")).click();
Thread.sleep(5000);
newTab.close();

driver.SwitchTo().window(parent);
driver.findElement(By.name("submit_search")).click();
}
}
