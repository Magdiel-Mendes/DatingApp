using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<DataContext>(opt => {
    opt.UseSqlite(builder.Configuration.GetConnectionString("Default"));
});

builder.Services.AddCors();

var app = builder.Build();
app.UseCors(opt => opt.AllowAnyOrigin());

app.MapControllers();

app.Run();
