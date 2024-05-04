namespace eDictionaryWebAPI.Mapper;

public interface IMapperService<TSource, TDestination>
{
    TDestination Map(TSource source);
}