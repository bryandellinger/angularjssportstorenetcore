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
    public class OrderController : ControllerBase
    {
        private readonly StoreDbContext context;
        public OrderController(StoreDbContext ctx) => context = ctx;
        [HttpPost]
        public IActionResult Post([FromBody]  Order model)
        {
            context.Add(model);
            context.SaveChanges();
            foreach (var item in model.Products)
            {
                context.Add(new OrderProductJunction { OrderId = model.ID, ProductId = item.ID, Count = item.Count });
            }
            context.SaveChanges();
            return Ok(new Order { ID = model.ID });
        }

        [HttpGet]
        public IActionResult  Get() {
            var result = context.Orders.Include(x => x.OrderProductJunctions).ThenInclude(x => x.Product).ToArray();
            List<Order> orders = new List<Order>();
            for (int i = 0; i < result.Length; i++)
            {
                Order order = result[i];            
                List<Product> products = new List<Product>();
                foreach (var orderProductJunction in result[i].OrderProductJunctions)
                {
                    Product product = orderProductJunction.Product;
                    product.Count = orderProductJunction.Count;
                    product.OrderProductJunctions = null;
                    products.Add(product);
                }
                order.Products = products;
                order.OrderProductJunctions = null;
            }
            return Ok(result);
          }
    }
}