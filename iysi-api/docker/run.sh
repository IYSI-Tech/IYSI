#!/bin/sh

cd /var/www

#php artisan migrate:fresh --seed --force
php artisan migrate --force
php artisan cache:clear
php artisan config:cache
php artisan route:cache
php artisan storage:link

/usr/bin/supervisord -c /etc/supervisord.conf
