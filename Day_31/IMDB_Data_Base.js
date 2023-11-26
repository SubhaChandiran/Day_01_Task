/*
    IMDB Design a DB for IMDB 

    1. Movie should have multiple media(Video or Image)
    2. Movie can belongs to multiple Genre
    3. Movie can have multiple reviews and Review can belongs to a user
    4. Artist can have multiple skills
    5. Artist can perform multiple role in a single film

    List of tables:
        - Movie Collection
        - Genre Collection
        - Review Collection
        - User Collection
        - Artist Collection
        - Skill Collection
        - Role Collection

    Relationships:
        - Movie and Review: One-to-Many
        - User and Review: One-to-Many
        - Movie and Genre: Many-to-Many
        - Artist and Role: One-to-Many
        - Artist and skills: Many-to-Many

    List of tables and columns:

        1. Movie Collection:
            - _id (Primary key)
            - title
            - release_date
            - media (Array of Video/Image objects)
            - genres (Array of genres IDs)
            - reviews (Array of review IDs)
        
        2. Genre Collection:
            - _id (Primary key)
            - name

        3. Review Collection:
            - _id (Primary key)
            - movie_id (foreign key referencing Movie)
            - user_id (foreign key referencing user Collection)
            - rating
            - comment
            - timestamp

        4. User Collection:
            - _id (Primary key)
            - username
            - email
            - password

        5. Artist Collection:
            - _id (Primary key)
            - name
            - skills (Array of skill IDs)
            - roles (Array of Role IDs)

        6. Skill Collection:
            - _id (Primary key)
            - name
        
        7. Role Collection
            - _id (Primary key)
            - name

*/
