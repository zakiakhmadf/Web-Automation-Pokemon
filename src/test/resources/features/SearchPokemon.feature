@Web
Feature: Search Bulbapedia

  Scenario: Search pokemon Pikachu on Bulbapedia
    Given User open bulbapedia home page
    When User input pokemon "Pikachu" on the search field
    Then User see pokemon named "Pikachu" on bulbapedia article page
    And User see pokemon number "#025" on bulbapedia article

  Scenario: Search pokemon Pikachu on Bulbapedia
    Given User open bulbapedia home page
    When User input pokemon "Charizard" on the search field
    Then User see pokemon named "Charizard" on bulbapedia article page
    And User see pokemon number "#006" on bulbapedia article

  Scenario: Search pokemon Pikachu on Bulbapedia
    Given User open bulbapedia home page
    When User input pokemon "Charmander" on the search field
    Then User see pokemon named "Charmander" on bulbapedia article page
    And User see pokemon number "#004" on bulbapedia article