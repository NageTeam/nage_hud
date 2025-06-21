NAGE = exports['nage']:getSharedCode()

Citizen.CreateThread(function()
    while true do
        local id = NAGE.PlayerID()
        local ped = NAGE.PlayerPedID()
        local health = GetEntityHealth(ped) - 100
        local armor = GetPedArmour(ped)

        SendNUIMessage({
            task = 'updateHud',
            info = {
                id = id,
                health = health,
                armor = armor
            }
        })
        
        Citizen.Wait(750)
    end
end)

AddEventHandler('onClientResourceStart', function(resourceName)
    if resourceName == GetCurrentResourceName() then
        local ped = PlayerPedId()
        if DoesEntityExist(ped) then
            SetEntityHealth(ped, 200)
        end
    end
end)

AddEventHandler('playerSpawned', function()
    Citizen.SetTimeout(500, function()
        local ped = PlayerPedId()
        if DoesEntityExist(ped) then
            SetEntityHealth(ped, Config.SpawnHealth)
            SetPedArmour(ped, Config.SpawnArmor)
        end
    end)
end)
