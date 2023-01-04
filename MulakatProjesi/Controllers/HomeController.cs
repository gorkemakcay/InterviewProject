using Microsoft.AspNetCore.Mvc;
using MulakatProjesi.Models;

namespace MulakatProjesi.Controllers;

public class HomeController : Controller
{
    public HomeController()
    {

    }

    [HttpGet]
    public IActionResult Index()
    {
        return View();
    }

    // ###########################################################

    /// <summary>
    /// İletişim sayfasına gider
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public IActionResult Contact()
    {
        return View();
    }

    /// <summary>
    /// İletişim formu post metodu
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpPost]
    public IActionResult Contact(ContactVM model)
    {
        return View();
    }

    // ###########################################################

    /// <summary>
    /// Ürünler sayfasına gider
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public IActionResult Products()
    {
        return View();
    }
}