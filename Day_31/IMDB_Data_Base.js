/*
    IMDB Design a DB for IMDB 

    1. Movie should have multiple media(Video or Image)
    2. Movie can belongs to multiple Genre
    3. Movie can have multiple reviews and Review can belongs to a user
    4. Artist can have multiple skills
    5. Artist can perform multiple role in a single film

    List of tables:
        - Movie
        - Genre 
        - Review 
        - User 
        - Artist 
        - Skill 
        - Role 

    Relationships:
        - Movie and Review: One-to-Many
        - User and Review: One-to-Many
        - Movie and Genre: Many-to-Many
        - Artist and Role: One-to-Many
        - Artist and skills: Many-to-Many

    List of tables and columns:

        1. Movie:
            - movie_id (Primary key)
            - title
            - release_date
            - media (Array of Video/Image objects)
            - genres (Array of genres IDs)
            - reviews (Array of review IDs)
            - artist_id (foreign key referencing Artist)
        
        2. Genre:
            - genre_id (Primary key)
            - name

        3. Review :
            - review_id (Primary key)
            - movie_id (foreign key referencing Movie)
            - user_id (foreign key referencing user)
            - rating
            - comment
            - timestamp

        4. User:
            - user_id (Primary key)
            - username
            - email
            - password

        5. Artist:
            - artist_id (Primary key)
            - name
            - skills (Array of skill IDs)
            - roles (Array of Role IDs)
            - movie_id (foreign key referencing Artist)

        6. Skill:
            - skill_id (Primary key)
            - name
            - artist_id (foreign key referencing Artist)
        
        7. Role
            - Role_id (Primary key)
            - name
            - artist_id (foreign key referencing Artist)

*/
