export default {
    pos: {
        search: 'Поиск',
        configuration: 'Конфигурация',
        language: 'Язык',
        theme: {
            name: 'Темы',
            light: 'Светлая',
            dark: 'Тёмная',
        },
        dashboard: {
            pending_reviews: 'Последний отзыв',
            new_customers: 'Новые пользователи',
            welcome: {
                title: 'Добро пожаловать на наш сайт!',
                subtitle: 'Здесь вы можете создавать свои собственные коллекции изображений и делиться ими с друзьями.',
            },
        },
    },
    resources: {
        customers: {
            name: 'Пользователь |||| Пользователи',
            fields: {
                commands: 'Заказы',
                groups: 'Части',
                last_seen_gte: 'Посетил с',
                name: 'Имя',
            },
            tabs: {
                identity: 'Личность',
                address: 'Адресс',
                orders: 'Заказы',
                reviews: 'Отзывы',
                stats: 'Статистика',
                collection: 'Коллекция'
            },
            page: {
                delete: 'Удалить пользователя',
            },

        },
        commands: {
            name: 'Заказ |||| Заказы',
            fields: {
                basket: {
                    delivery: 'Доставка',
                    reference: 'Справка',
                    quantity: 'Количество',
                    sum: 'Сумма',
                    tax_rate: 'Ставка налога',
                    total: 'Общее количество',
                    unit_price: 'Цена за единицу',
                },
                customer_id: 'Пользователь',
                date_gte: 'Прошло с',
                date_lte: 'Прошло раньше',
                total_gte: 'Минимальная сумма',
            },
        },
        products: {
            name: 'Постер |||| Главная страница',
            fields: {
                category_id: 'Категория',
                height_gte: 'Мин высота',
                height_lte: 'Максимальная высота',
                height: 'Высота',
                image: 'Изображение',
                title: 'Заголовок',
                stock_lte: 'Внизу хранилища',
                thumbnail: 'Миниатюра',
                width_gte: 'Мин Ширина',
                width_lte: 'Макс Ширина',
                width: 'Ширина',
            },
            tabs: {
                image: 'Изображение',
                details: 'Детали',
                description: 'Описание',
                reviews: 'Рецензии',
            },
        },
        categories: {
            name: 'Категория |||| Категории',
            fields: {
                products: 'Коллекция',
            },

        },
        reviews: {
            name: 'Отзыв |||| Отзывы',
            fields: {
                customer_id: 'Пользователь',
                command_id: 'Заказ',
                product_id: 'Произведение',
                date_gte: 'Опубликовано с',
                date_lte: 'Опубликовано раньше',
                date: 'Дата',
                comment: 'Коментарий',
                rating: 'Рэйтинг',
            },
            action: {
                accept: 'Принять',
                reject: 'Отклонить',
            },
            notification: {
                approved_success: 'Отзыв утвержден',
                approved_error: 'Ошибка: обзор не утвержден',
                rejected_success: 'Отзыв отклонен',
                rejected_error: 'Ошибка: обзор не отклонен',
            },
        },
    },
};
