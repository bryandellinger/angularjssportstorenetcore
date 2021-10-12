using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using angularsportsstorenetcore2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace angularsportsstorenetcore2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly StoreDbContext context;
        public LoginController(StoreDbContext ctx) => context = ctx;
        public IActionResult Post([FromBody]  User model)
        {
            var user = context.Users.Where(x => x.Username == model.Username).Where(x => x.Password == model.Password).FirstOrDefault();
            if (user != null)
            {
                return Ok(new User { ID = model.ID, Username = model.Username });
            }
            return Unauthorized();
        }
    }
}