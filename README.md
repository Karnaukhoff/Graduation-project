# Описание проекта
Сайт онлайн объявлений(аналог Авито). 
Данный сайт представляет собой электронный каталог объявлений о товарах, услугах, вакансиях, резюме и других предложениях (вместе — «товары»), которые пользователи могут предлагать и искать с целью заключения сделок.
1.Главная страница
Пока пользователь не авторизован, он имеет доступ только к Главной странице, на которой отображаются товары, которые размещены на площадке. Пользователь может осуществлять поиск по объявлениям с помощью строки поиска товара.
2. Пользователь имеет возможность авторизации и регистрации на сайте.
3. Личный кабинет
В личном кабинете отображается: приветствие пользователя, имя и фамилия, аватарка и телефон. Все поля могут редактироваться.
Если пользователь не редактировал эти поля, то кнопка "Сохранить" должна быть неактивной.
4. Если изменил хотя бы 1 поле, то кнопка должна быть активной.
5. Ниже в профиле отображаются "Мои товары".
По клику на товар открывается карточка, где указана цена, наименование и описание товара, телефон и имя продавца. Также представлены отзывы пользователей о товаре.
6. Если эту карточку открывает продавец, он имеет возможность редактировать цену, наименование и описание товара. Также, есть возможность снять объявление с публикации.
7. Кнопка "Разместить объявление"
По клику на кнопку открывается модальное окно и у продавца есть возможность добавить цену, наименование и описание товара, и его картинку. В конце окна кнопка "Опубликовать".
8. Когда объявление опубликовано, можно открыть карточку товара, где есть возможность редактировать цену, наименование и описание товара.
Над проектом работал: https://github.com/Karnaukhoff
# Технологии в проекте
1. HTML
2. React
3. Styled-components
4. Redux
5. Swiper

# Установка и запуск
1. Установите Docker: https://www.docker.com/
2. Перезагрузите ПК
3. Откройте Docker с помощью ярлыка
4. Скачайте архив и разархивируйте его: https://drive.google.com/file/d/1pFE-NRANTsWmQwTyURjHXuECMmoKCFjO/view
5. Откройте терминал, укажите путь к этой папке и запустите команду: docker-compose -f docker-compose-backend.yaml up -d. В случае если сервер не запустится, введите эту команду повторно. Далее все запросы будут доступны по адресу: http://localhost:8090/. Чтобы остановить работу сервера, введите команду: docker-compose down
6. Откройте VS Code
7. Клонируйте репозиторий на свой компьютер
8. Установите зависимость npm install
9. Выберите нужный путь через команду в терминале cd "<путь>"
10. Запустите проект через команду: npm start
11. Откройте проект по адресу: http://localhost:3000

# Поставленные задачи и оценочное время выполнения
1. Верстка всех страниц для Desktop-версии (8 часов)
2. Развернуть Backend (1 час)
3. Реализация поведения незарегистрированного пользователя (5 часа)
4. Реализация функционала регистрации и аутентификации пользователя (5 часов)
5. Поведение зарегистрированного пользователя (5 часов)
6. Корректировки (5 часов)

Общее оценочное время работы над всем проектом: 29 часа
# Фактически затраченное время
1. Верстка всех страниц для Desktop-версии (16 часов)
2. Развернуть Backend (1 час)
3. Реализация поведения незарегистрированного пользователя (18 часов)
4. Реализация функционала регистрации и аутентификации пользователя (6 часов)
5. Поведение зарегистрированного пользователя (28 часов)
6. Корректировки (17 часов)

Фактически затраченное время: 86 часов
