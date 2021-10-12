using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace angularsportsstorenetcore2.Models
{
    public class OrderProductJunction
    {
        public long Id { get; set; }
        public int Count { get; set; }
        public long OrderId { get; set; }
        public Order Order { get; set; }
        public long ProductId { get; set; }
        public Product Product { get; set; }
    }
}
