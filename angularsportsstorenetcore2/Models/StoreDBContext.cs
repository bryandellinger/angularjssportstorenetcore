using Microsoft.EntityFrameworkCore;
namespace angularsportsstorenetcore2.Models
{
    public class StoreDbContext : DbContext
    {

        public StoreDbContext(DbContextOptions<StoreDbContext> options)
            : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderProductJunction> OrderProductJunctions { get; set;}
        public DbSet<User> Users { get; set; }
    }
}
