
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace angularsportsstorenetcore2.Models
{
    public class Product
    {
        public long ID { get; set; }

        [NotMapped]
        public int Count { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        [Column(TypeName = "decimal(8, 2)")]
        public decimal Price { get; set; }

        public string Category { get; set; }

        public IEnumerable<OrderProductJunction> OrderProductJunctions { get; set; }
    }
}
