using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using angularsportsstorenetcore2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace angularsportsstorenetcore2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly StoreDbContext context;
        public ProductsController(StoreDbContext ctx) => context = ctx;

        [HttpGet]
        public async Task<IActionResult> Get() => Ok(await context.Products.ToListAsync());

        [HttpDelete("{id:int}")]
        public  IActionResult DeleteProduct(int id)
        {
            context.Products.Remove(new Product { ID = id });
            context.SaveChanges();
            return Ok();
        }

        [HttpPost]
        public IActionResult Post([FromBody]  Product model)
        {
            context.Add(model);
            context.SaveChanges();
            return Ok(model);
        }

        [HttpPost("{id:int}")]
        public IActionResult Put([FromBody]  Product model)
        {
            context.Update(model);
            context.SaveChanges();
            return Ok(model);
        }

        }
   }
 
