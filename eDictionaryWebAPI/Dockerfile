FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 5094

ENV ASPNETCORE_URLS=http://*:5094

USER app
FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG configuration=Release
WORKDIR /src
COPY ["eDictionaryWebAPI/eDictionaryWebAPI.csproj", "eDictionaryWebAPI/"]
RUN dotnet restore "eDictionaryWebAPI/eDictionaryWebAPI.csproj"
COPY . .
WORKDIR "/src/eDictionaryWebAPI"
RUN dotnet build "eDictionaryWebAPI.csproj" -c $configuration -o /app/build

FROM build AS publish
ARG configuration=Release
RUN dotnet publish "eDictionaryWebAPI.csproj" -c $configuration -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "eDictionaryWebAPI.dll"]
