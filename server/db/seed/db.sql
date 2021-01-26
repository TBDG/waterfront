DO
$$
    begin

        if not EXISTS(
                SELECT 1
                FROM information_schema.tables
                WHERE table_schema = 'public'
                  and table_name = 'email')
        then
            create table email
            (
                id    serial primary key,
                email text unique
            );
        else
            RAISE NOTICE 'Database already exists';
        end if;
    end;
$$
