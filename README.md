## CRUD:  
Automapper for DTO marshall/unmarshall

## Migration:  
yarn migrate --help 
yarn migrate up

## Seed:
yarn run seed
yarn run seed:refresh

## ODM Integration:
`mongoose` in the `schema` directory.

`mongoose.set('strictQuery', true);` is inside the schema for now, ideally, while defining the db module, but this is a micro project, so it's fine.

## Logging
`GlobalExceptionFilter` in `common/filters` directory.
Sends stuff to `common/loggers/ExceptionLoggerService`.


## Transaction: 
`withTransaction()` in IServiceBase  
tested via: `/create-two-with-same-email`

