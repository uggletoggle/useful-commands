FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src
COPY ["UsefulCommands.Api.csproj", "./"]
RUN dotnet restore "UsefulCommands.Api.csproj"
COPY . .
WORKDIR "/src"
RUN dotnet build "UsefulCommands.Api.csproj" -c Release -o /app/build
RUN dotnet publish "UsefulCommands.Api.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
EXPOSE 8080
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "UsefulCommands.Api.dll"]
